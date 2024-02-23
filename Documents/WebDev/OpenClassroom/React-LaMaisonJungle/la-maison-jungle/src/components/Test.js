function Test() {
    const categories = ["plantes d'ombre", "cactus", "plantes d'extérieur", "plantes pour débutants", "plantes fleuries"]

return (
<ul>
    {categories.map((category, index) => <li key={`${category}-${index}`}>
    {category}
    </li>)}
</ul>
)
}

export default Test