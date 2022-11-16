import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import * as RadioGroup from '@radix-ui/react-radio-group';
import * as z from 'zod'
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { api } from '../../lib/axios';
import { useContext } from 'react';
import { TransactionsContext } from '../../contexts/TransactionsContext';

const newTransactionFormSchema = z.object ({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
})

type newTransactionsFormInputs = z.infer<typeof newTransactionFormSchema>

export function NewTransactionModal() {

  const { createTransaction } = useContext(TransactionsContext)

  const { 
    control, 
    register, 
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm<newTransactionsFormInputs>({
    resolver: zodResolver(newTransactionFormSchema)
  })

  async function handleCreateNewTransaction(data: newTransactionsFormInputs) {
    const { description, price, type, category } = data

    createTransaction(data)

    reset()
  }

  const theme = useTheme()

  return (
    <Dialog.Portal>
      <Overlay />
      
      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
            type="text" 
            placeholder='Descrição' 
            required 
            {...register('description')}
          />
          <input 
            type="number" 
            placeholder='Preço' 
            required 
            {...register('price', { valueAsNumber: true})}
          />
          <input 
            type="text" 
            placeholder='Categoria' 
            required 
            {...register('category')}
          />

          <Controller 
            control={control} 
            name='type'
            render={({ field }) => {
              return (
                <TransactionType 
                  onValueChange={field.onChange} 
                  value={field.value}
                >
                  <TransactionTypeButton variant='income' value='income' >
                    <ArrowCircleUp size={24} />
                    <span>Venda</span>
                  </TransactionTypeButton>
                  <TransactionTypeButton variant='outcome' value='outcome' >
                    <ArrowCircleDown size={24} />
                    <span>Compra</span>
                  </TransactionTypeButton>
                </TransactionType>
              )
            }}
          />

          <button type='submit' disabled={isSubmitting}>
            Cadastrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}