import { useSelector } from 'react-redux'

export function useAuth() {
  const { email, isAuth, id } = useSelector((state) => {
    return state.auth
  })

  return {
    isAuth,
    email,
    id,
  }
}
