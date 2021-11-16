function debounce(func, wait, immediate) {
    var timeout;
    return function () {
        const context = this, args = arguments,
            later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

function getEmptyTransaction() {
    return {
        total_price: 0.01,
        currency: '',
        credit_card_type: '',
        credit_card_number: ''
    }
}

export const utilService = {
    debounce,
    getEmptyTransaction
}