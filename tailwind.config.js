/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                'brand-orange': '#F59E0B', // Màu vàng cam chủ đạo
                'brand-red': '#DC2626',    // Màu đỏ điểm nhấn
            },
        },
    },
    plugins: [],
}