export const CustomerPreview = ({ customer }) => {
    const {
        first_name,
        last_name,
        email,
        gender,
        country,
        city,
        street,
        phone } = customer

    return (
        <section className="customer-preview flex column gap">
            <span className="first-name">{first_name}</span>
            <span className="last-name">{last_name}</span>
            <span className="email">{email}</span>
            <span className="gender">Gender: {gender}</span>
            <span className="phone">Phone number: {phone}</span>
            <span className="address">Address: {country}, {city}, {street}</span>
        </section >
    )
}