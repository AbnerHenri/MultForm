import * as C from './style'

const Theme = ({ children }) => {
    return(
        <C.Container>
            <C.Area>
                <Header />

                <C.Steps>
                    <C.Sidebar>
                        ...
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