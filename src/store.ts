import { makeAutoObservable } from 'mobx'
let initialTodos: ITodo[] = [
  {
    id: 1,
    name: 'Learn React',
    description: 'learn react with me',
    completed: true,
  },
  {
    id: 2,
    name: 'Learn Redux',
    description: 'learn redux with me',
    completed: false,
  },
  {
    id: 3,
    name: 'Learn GraphQL',
    description: 'learn graphql with me',
    completed: false,
  },
]
export type ITodo = {
  id: number
  name: string
  description: string
  completed: boolean
}

class TodoStore {
  todos: ITodo[] = initialTodos

  constructor() {
    makeAutoObservable(this)
  }

  add = (name: string, description: string) => {
    this.todos.push({
      id: this.todos.length ? this.todos[this.todos.length - 1].id + 1 : 1,
      name,
      description,
      completed: false,
    })
  }
  deleteItem = (id: number) => {
    this.todos = this.todos.filter(todo => todo.id !== id)
  }
  complete = (id: number) => {
    this.todos = this.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )
  }
}

export const todoStore = new TodoStore()
