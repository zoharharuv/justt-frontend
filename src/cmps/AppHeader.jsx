import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { FormControl, InputLabel, MenuItem, Select } from '@material-ui/core'

export const AppHeader = ({ toggleView, view }) => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };

    return (
        <header className="app-header flex align-center  main-layout space-between">
            <NavLink to='/'>
                <h1>Justt billing demo app</h1>
            </NavLink>
            <div className="flex align-center gap">
                <NavLink to='/customers'>Customers</NavLink>
            </div>
        </header>
    )
}
