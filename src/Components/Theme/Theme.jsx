import * as C from './style'

import Header from '../Header/Header'
import SidebarItem from '../SidebarItem/SidebarItem'

import Profile from '../../Assets/perfil.png'
import Email from '../../Assets/o-email.png'
import Book from '../../Assets/history-book.png'

import { useForm } from '../../Contexts/FormContexts'

const Theme = ({ children }) => {
    const { state } = useForm()

    return(
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem 
                            title={'Pessoal'} 
                            description={'Se Identifique'} 
                            icon={Profile} 
                            path={'/'} 
                        />

                        <SidebarItem 
                            title={'Profissional'} 
                            description={'Seu Nível'} 
                            icon={Book} 
                            path={'/step2'} 
                        />

                        <SidebarItem 
                            title={'Contatos'}
                            description={'Como te achar?'}
                            icon={Email}
                            path={'/step3'}
                        />
                    </C.Sidebar>

                    <C.Page>
                        {children}
                    </C.Page>
                </C.Steps>
            </C.Area>
        </C.Container>
    )
}

export default Theme;