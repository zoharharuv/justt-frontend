import { NavLink } from 'react-router-dom'

export const AppHeader = () => {

    return (
        <header className="app-header flex align-center  main-layout space-between">
            <NavLink to='/'>
                <h1>Justt billing</h1>
            </NavLink>
            <NavLink to='/transaction/edit'>
                <h3>New transaction</h3>
            </NavLink>
            <div className="flex align-center gap">
                <NavLink to='/customers'>Customers</NavLink>
            </div>
        </header>
    )
}
