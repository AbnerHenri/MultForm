import * as C from './style'

import Header from '../Header/Header'
import SidebarItem from '../SidebarItem/SidebarItem'

const Theme = ({ children }) => {


    return(
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        <SidebarItem 
                            title={'Pessoal'} 
                            description={'Se Identifique'} 
                            icon={'Profile'} 
                            path={'/'} 
                        />

                        <SidebarItem 
                            title={'Profissional'} 
                            description={'Seu Nível'} 
                            icon={'Book'} 
                            path={'/step2'} 
                        />

                        <SidebarItem 
                            title={'Contatos'}
                            description={'Como te achar?'}
                            icon={'email'}
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