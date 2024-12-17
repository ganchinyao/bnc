import { HomePageComponent } from '@/app/components/home/HomePageComponent'
import { ResponsiveLayout } from './components/ResponsiveLayout'

export default function Home() {
  return (
    <ResponsiveLayout flex={1}>
      <HomePageComponent />
    </ResponsiveLayout>
  )
}
