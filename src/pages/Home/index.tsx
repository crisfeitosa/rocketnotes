import { FiPlus } from 'react-icons/fi'
import { useState, useEffect } from 'react'

import { Note } from '../../components/Note'
import { Input } from '../../components/Input'
import { Header } from '../../components/Header'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles'
import { api } from '../../services/api'

interface Tag {
  id: string;
  name: string;
}

export function Home() {
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagsSelected, setTagsSelected] = useState<string[]>([]);

  function handleTagsSelected(tagName: string) {
    setTagsSelected(prevState => {
      if (tagName === "all") {
        return [];
      }

      if (prevState.includes(tagName)) {
        return prevState.filter(tag => tag !== tagName);
      }

      return [...prevState, tagName];
    });
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get('/tags');
      setTags(response.data);
    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Brand>
        <h1>Rocket Notes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            onClick={() => handleTagsSelected("all")}
            isActive={tagsSelected.length === 0}
          />
        </li>

        {tags && tags.map(tag => (
          <li key={String(tag.id)}>
            <ButtonText
              onClick={() => handleTagsSelected(tag.name)}
              title={tag.name}
              isActive={tagsSelected.includes(tag.name)}
            /> 
          </li>
        ))}
      </Menu>

      <Search>
        <Input placeholder="Pesquisar pelo título" />
      </Search>

      <Content>
        <Section title="Minhas notas">
          <Note data={{
            title: 'React',
            tags: [
              { id: '1', name: 'react' },
              { id: '2', name: 'rocketseat' }
            ]
          }}
          />
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}