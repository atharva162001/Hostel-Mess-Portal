import { Imprima, Inter } from 'next/font/google'
import LoginForm from '@/components/login/Loginform'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
    <LoginForm/>
    </div>
  )
}
