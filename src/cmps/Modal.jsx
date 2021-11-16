import { Link } from "react-router-dom";
import { Box, Modal } from "@material-ui/core";
import { Edit } from "@material-ui/icons";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
};


export const BasicModal = ({ onSelectedTransaction, selectedTransaction }) => {

    const {
        _id,
        first_name,
        last_name,
        email,
        gender,
        country,
        city,
        street,
        phone,
        total_price,
        currency,
        credit_card_type,
        credit_card_number } = selectedTransaction

    return (
        <div>
            <Modal
                open={!!selectedTransaction}
                onClose={() => { onSelectedTransaction(null) }}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box sx={style}>
                    <section className="modal-data flex column">
                        <div className="customer-info flex column gap">
                            <h2>Customer info</h2>
                            <small>
                                <strong>Name: </strong>
                                {first_name + ' ' + last_name}
                            </small>
                            <small>
                                <strong>Gender: </strong>
                                {gender}
                            </small>
                            <small>
                                <strong>Phone: </strong>
                                {phone}
                            </small>
                            <small>
                                <strong>Email: </strong>
                                {email}
                            </small>
                            <small>
                                <strong>Address: </strong>
                                {country + ', ' + city + ', ' + street}
                            </small>
                        </div>

                        <div className="transaction-info flex column gap">
                            <h2>Transaction info </h2>
                            <small>
                                <strong>Currency: </strong>
                                {currency}
                            </small>
                            <small>
                                <strong>Amount: </strong>
                                {total_price}
                            </small>
                            <small>
                                <strong>Card type: </strong>
                                {credit_card_type}
                            </small>
                            <small>
                                <strong>Card number: </strong>
                                {credit_card_number}
                            </small>
                        </div>
                        <Link to={`transaction/edit/${_id}`} className="flex align-center gap">
                            <Edit fontSize="small"/>
                            Edit transaction
                        </Link>
                    </section>
                </Box>
            </Modal>
        </div >
    );
}