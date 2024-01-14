import { useSelector } from 'react-redux'

export function useAuth() {
  const { isAuth, id } = useSelector((state) => state.auth)

  return {
    isAuth,
    id,
  }
}
