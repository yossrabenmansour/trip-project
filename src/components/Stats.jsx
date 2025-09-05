export default function Stats({ item }) {
  if (!item.length){
    return(
      <footer>
        <strong>Let’s get started! Add something to your list 📝</strong>
      </footer>
    )
  }
  const numItem = item.length;
  const numItemPacked = item.filter((obj) => obj.packed).length;
  const poucentage =Math.round((numItemPacked / numItem) * 100);
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
