export const fetchBenches = () => {
    return $.ajax({
        method: 'GET',
        url: '',
        error: (err) => console.log(err)
    });
}