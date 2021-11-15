import { Box, Modal } from "@material-ui/core";
import { Loader } from "./Loader";

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
                    <section className="modal-data flex column   gap">
                        <h2>Customer name: {first_name + ' ' + last_name}</h2>
                        <small>Customer info: {'Gender: ' + gender + ' | Phone: ' + phone + ' | Email: ' + email}</small>
                        <h4>Address: {country + ', ' + city + ', ' + street}</h4>
                        <h2>Transaction info: </h2>
                        <h4>Currency: {currency}, Total price: {total_price}</h4>
                        <h4>Card type: {credit_card_type}, card number: {credit_card_number}</h4>
                    </section>
                </Box>
            </Modal>
        </div >
    );
}