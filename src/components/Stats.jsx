export default function Stats({ item }) {
  const numItem = item.length;
  const numItemPacked = item.filter((obj) => obj.packed).length;
  const poucentage = numItem===0 ? 0 : Math.round((numItemPacked / numItem) * 100);
  return (
    <footer>
      <strong>
        {poucentage === 100
          ? "Nothing left to pack. Adventure awaits!✨🛬"
          : `You have ${numItem} items on your list and you already packed
        ${numItemPacked} (${poucentage}%) 👜`}
      </strong>
    </footer>
  );
}
