
export default function formatDate(dateString) {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    console.log(options, "Formatted Date");
    return new Date(dateString).toLocaleDateString('en-GB', options);
}