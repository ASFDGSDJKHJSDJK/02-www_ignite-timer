import { Play } from "phosphor-react"
import { useForm } from 'react-hook-form'
import { zodResolver  } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { CountdownContainer, FormContainer, HomeContainer, MinutesAmountInput, Separator, StartCountdownButton, TaskInput } from "./styles"


const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, 'Informe a tarefa'),
    minutesAmount: zod.number()
    .min(5, 'O ciclo precisa de no minimo ser de 5 minutos')
    .max(60, 'O ciclo precisa de ser no máximo de 60 minutos'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export function Home() {
   const { register, handleSubmit, watch } = useForm({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
       task: '',
       minutesAmount: 0,
    },
   })

    function handleCreteNewCycle(data:any) {
   console.log(data) 
    }
    
    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <HomeContainer>
          <form action="" onSubmit={handleSubmit(handleCreteNewCycle)}>

            <FormContainer> 
                <label htmlFor="task"> Vou trabalhar </label>
                <TaskInput 
                 id="task"
                 list="task-suggestions"
                 placeholder="Dê um nome ao seu projecto"
                 {...register('task')}
                 />
                 
                 <datalist id="task-suggestions" >
                    <option value="Projecto 1"/>
                    <option value="Projecto 2"/>
                    <option value="Projecto 3"/>
                    <option value="Projecto 4"/>
                 </datalist>
                 

                <label htmlFor="minutesAmount">durante</label>
                <MinutesAmountInput 
                type="number" 
                id="minutesAmount"
                placeholder="00"
                step={5}
                min={5}
                max={60}
                {...register('minutesAmount', {valueAsNumber:true })}
                />

            <span>minutes.</span>
            </FormContainer>


            <CountdownContainer>
                <span>0</span>
                <span>0</span>
            <Separator>:</Separator>
                <span>0</span>
                <span>0</span>
            </CountdownContainer>

            <StartCountdownButton disabled={ isSubmitDisabled } type="submit">
                <Play size={24} />
                Começar
            </StartCountdownButton>
          </form>
        </HomeContainer>
    )
}