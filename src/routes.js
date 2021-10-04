import List from './pages/list'
import NotFound from './pages/notFound'
import MyForm from './pages/form'

const routes = [
    {
        path: '/',
        exact : true,
        main : ()=> <List/>
    },
    {
        path: '/form',
        exact : false,
        main : ({history})=> <MyForm history={history}/>
    },
    {
        path: '/edit/:id',
        exact : false,
        main : ({match,history})=> <MyForm match={match} history={history}/>
    },
    {
        path: '',
        exact : false,
        main : ()=> <NotFound/>
    }
]

export default routes