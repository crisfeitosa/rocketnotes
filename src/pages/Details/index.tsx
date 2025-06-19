import { useParams, useNavigate } from 'react-router-dom'

import { Tag } from '../../components/Tag'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Section } from '../../components/Section'
import { ButtonText } from '../../components/ButtonText'

import { Container, Links, Content } from './styles'
import { useEffect, useState } from 'react'
import { api } from '../../services/api'

interface Tag {
  id: string;
  name: string;
} 

interface Link {
  id: string;
  url: string;
}

interface Note {
  id: string;
  title: string;
  description: string;
  tags?: Tag[];
  links?: Link[];
}

export function Details() {
  const params = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState<Note | null>(null);

  function handleBack() {
    navigate('/');
  }

  async function handleRemove() {
    const confirm = window.confirm('Deseja realmente excluir a nota?');

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      handleBack();
    } 
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/notes/${params.id}`);

      setData(response.data);
    }

    fetchNote();
  }, [params.id]);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir nota" onClick={handleRemove} />

            <h1>{data?.title}</h1>

            <p>{data?.description}</p>

            {data?.links && (
              <Section title="Links">
                <Links>
                  {data?.links.map(link => (
                    <li key={link.id}>
                      <a href={link.url} target="_blank">{link.url}</a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {data?.tags && (
              <Section title="Marcadores">
                {data?.tags.map(tag => (
                  <Tag key={tag.id} title={tag.name} />
                ))}
              </Section>
            )}

            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  )
}