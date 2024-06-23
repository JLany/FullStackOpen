
const Filter = ({ onFilterChange, searchText }) => {

  return (
    <div>
      filter with
      <input
        value={searchText}
        onChange={onFilterChange}
      />
    </div>
  )

}

export default Filter
