import Index from './pages/Index'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ToS from './pages/ToS'
import Affiliate from './pages/Affiliate'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import FirstSteps from './pages/FirstSteps'
import Webinars from './pages/Webinars'
import TrainingVideos from './pages/TrainingVideos'
import DocumentLibrary from './pages/DocumentLibrary'
import MarketingMaterials from './pages/MarketingMaterials'
import Notifications from './pages/Notifications'
import FAQs from './pages/FAQs'
import Reports from './pages/Reports'
import Support from './pages/Support'
import Login from './pages/Login'

import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/terms-and-conditions' element={<ToS />} />
        <Route path='/affiliate' element={<Affiliate />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/first-steps' element={<FirstSteps />} />
        <Route path='/webinars' element={<Webinars />} />
        <Route path='/training-videos' element={<TrainingVideos />} />
        <Route path='/document-library' element={<DocumentLibrary />} />
        <Route path='/marketing-materials' element={<MarketingMaterials />} />
        <Route path='/notifications' element={<Notifications />} />
        <Route path='/faqs' element={<FAQs />} />
        <Route path='/reports' element={<Reports />} />
        <Route path='/support' element={<Support />} />
      </Routes>
    </>
  )
}

export default App
