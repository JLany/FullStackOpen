
const Filter = ({
  searchText,
  onChange
}) => {
  return (
    <div>
      <input
        value={searchText}
        onChange={onChange}
      />
    </div>
  )
}

export default Filter
