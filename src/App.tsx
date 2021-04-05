import './App.css';
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import { Wrapper } from './App.styles'
import { useEffect, useState } from 'react';
import Add from './Add/Add'
import Grid from '@material-ui/core/Grid'
import List from './List/List';

export type ListItemType = {
  title: string
  details: string
  id: string
}

function App() {
  const [todoList, setTodoList] = useState([
    {
      "id": "9aff1d41-f3e7-473b-a426-3d84617070b7",
      "title": "Learn React",
      "details": "from abc"
    },
    {
      "id": "d0fe8e2a-9b31-4c57-9eca-d2eb3ff3cb17",
      "title": "Book Tickets",
      "details": "for a movie"
    }
  ] as ListItemType[])

  const addtoList = (item: ListItemType) => {
    setTodoList([...todoList, item])
  }

  const removeFromList = (id: string) => {
    setTodoList(prevList =>
      prevList.reduce((ack, item) => {
        if (item.id === id) {
          return ack
        } else {
          return [...ack, item]
        }
      }, [] as ListItemType[]))
  }

  useEffect(() => {
    console.log('in app.ts',todoList);
  }, [todoList])

  return (
    <Wrapper>
      <Grid container spacing={3}>
        <Grid item sm={3}>
          <Card>
            <CardContent>
              <Add addtoList={addtoList} />
            </CardContent>
          </Card>
        </Grid>

        <Grid item sm={9}>
          <Card>
            <CardContent>
              {todoList.length > 0 ? <List list={todoList} removeFromList={removeFromList} /> : 'No Todos'}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Wrapper>
  );
}

export default App;
