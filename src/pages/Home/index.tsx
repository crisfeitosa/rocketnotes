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

interface Note {
  id: string;
  title: string;
  tags: Tag[];
}

export function Home() {
  const [search, setSearch] = useState('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagsSelected, setTagsSelected] = useState<string[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);

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

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/notes?title=${search}&tags=${tagsSelected}`);

      setNotes(response.data);
    }

    fetchNotes();
  }, [tagsSelected, search]);

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
        <Input
          placeholder="Pesquisar pelo título"
          onChange={e => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas notas">
          {notes.map(note => (
            <Note
              key={String(note.id)}
              data={note}
            />
          ))}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  )
}