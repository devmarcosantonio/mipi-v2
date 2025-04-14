
import { Routes, Route } from 'react-router-dom'

import Layout from '../components/Layout'
import OEE from '../pages/OEE'
import IndisponibilidadeCOIDiaDia from '../pages/Indisponibilidade/IndisponibilidadeCOIDiaDia'
import IndisponibilidadeRegional from '../pages/Indisponibilidade/IndisponibilidadeRegional'
import IndisponibilidadeDiaDia from '../pages/Indisponibilidade/IndisponibilidadeDiaDia'
import IndisponibilidadeCOI from '../pages/Indisponibilidade/IndisponibilidadeCOI'
import Faturamento from '../pages/Faturamento'
import NotFound from '../pages/Common/NotFound'

const AppRoutes = () => {
  return (
      <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<OEE />} />
            <Route path="oee" element={<OEE />} />
            <Route path="indisponibilidade/dia-dia" element={<IndisponibilidadeDiaDia />} />
            <Route path="indisponibilidade/regional" element={<IndisponibilidadeRegional />} />
            <Route path="indisponibilidade/coi" element={<IndisponibilidadeCOI />} />
            <Route path="indisponibilidade/coi-dia-dia" element={<IndisponibilidadeCOIDiaDia />} />
            <Route path="faturamento" element={<Faturamento />} />
          </Route>

          <Route path="*" element={<NotFound />} />
      </Routes>
  )
}

export default AppRoutes