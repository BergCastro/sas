import React from 'react'
import MenuItem from './menuItem'
import MenuTree from './menuTree'

export default props => (
    <ul className='sidebar-menu'>
        <MenuItem path='/' label='Dashboard' icon='dashboard' />
        <MenuTree label='Cadastro' icon='edit'>
            <MenuItem path='billingCycles'
                label='Ciclos de Pagamentos' icon='usd' />
        </MenuTree>
        <MenuTree label='Cadastros' icon='edit'>

            <MenuItem path='testesFisicos'
                label="Testes Fisicos" icon='file-text' />
            <MenuItem path='pessoas'
                label="Pessoas" icon='file-text' />

        </MenuTree>

        
    </ul>
)