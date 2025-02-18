// pages/api/tina/[...routes].{ts,js}
// ...
import { TinaNodeBackend } from '@tinacms/datalayer'
const tinaHandler = TinaNodeBackend({
  // ...
})
export default (req, res) => {
  return tinaHandler(req, res)
}