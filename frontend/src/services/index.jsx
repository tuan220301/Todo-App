import { useMutation, useQuery, useQueryClient } from "react-query";
import { getTodos, postTodo, updateTodo, deleteTodo } from "../Recoil/toDoController";


export const useGetTodos = () => {
    const { data: todos, isLoading, isError, error } = useQuery({
        queryKey: ['todos'],
        queryFn: ({ signal }) => getTodos(signal),
        select: (res) => res
    })

    return { todos, isLoading, isError, error }
}

export const usePostTodo = () => {
    const queryClient = useQueryClient()
    const {
        isLoading: isCreating,
        isSuccess: isSuccessCreating,
        isError: isErrorCreating,
        error: errorCreateing,
        mutate: CreateTodo
    } = useMutation(
        (data) => postTodo(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['todos'])
            }
        }
    )

    return {
        isCreating,
        isSuccessCreating,
        isErrorCreating,
        errorCreateing,
        CreateTodo
    }
}

export const useUpdateTodo = () => {
    const queryClient = useQueryClient()
    const {
        isLoading: isUpdating,
        isSuccess: isSuccessUpdating,
        isError: isErrorUpdating,
        error: errorUpdating,
        mutate: UpdateTodo
    } = useMutation(
        ({ id, data }) => updateTodo({ id, data }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['todos'])
            }
        }
    )

    return {
        isUpdating,
        isSuccessUpdating,
        isErrorUpdating,
        errorUpdating,
        UpdateTodo
    }
}

export const useDelteTodo = () => {
    const queryClient = useQueryClient()
    const {
        isLoading: isDeleting,
        isSuccess: isSuccessDeleting,
        isError: isErrorDeleting,
        error: errorDeleting,
        mutate: DeleteTodo
    } = useMutation(
        (id) => deleteTodo(id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['todos'])
            }
        }
    )

    return {
        isDeleting,
        isSuccessDeleting,
        isErrorDeleting,
        errorDeleting,
        DeleteTodo
    }
}