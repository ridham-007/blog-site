
export async function GetAllCategories() {
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/common/category/${process.env.NEXT_PUBLIC_SITE_ID}`, {
            next: { revalidate: 200 },
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return null;
    }
}

// export async function getAllCategories() {
//     const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/category/all`, {
//         next: { revalidate: 3600 },
//     })
//     const data = await res.json();
//     const { categories } = data;
//     console.log(categories)

//     return <Footer categories={ categories } />
// }
