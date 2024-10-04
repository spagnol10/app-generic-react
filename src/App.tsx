import { useForm } from 'react-hook-form'
import './App.css'
import { Form, FormField } from './components/ui/form'
import { Input } from './components/ui/input'
import { Label } from './components/ui/label'

import { z } from "zod"

import { zodResolver } from "@hookform/resolvers/zod"

function App() {
  const formSchema = z.object({
    username: z.string().min(2).max(50),
  })

  const form = useForm()

  return (
    <>
      <Form >
        <FormField>

        </FormField>
      </Form>


    </>
  )
}

export default App
