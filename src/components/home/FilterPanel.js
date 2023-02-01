import './FilterPanel.css'
import { filterData } from '../../constants/constants';

const FilterPanel = ({
    showFilters,
    setShowFilters,
    setFilters,
    filters,
    clearFilters,
    areFiltersEmpty
    }) => {

    const { color, gender, price, type } = filters;

    const handleFilters = (prop, value) => {
        setFilters(prev => {
            const newSet = new Set(prev[prop]);

            if(newSet.has(value)) {
                newSet.delete(value);
            } else {
                newSet.add(value);
            }

            return {
                ...prev,
                [prop]: newSet
            }
        });
    };
    
    return (
        <>  

            <div className='filter-panel'>
                <div className='filters-grid'>
                    <div>
                        <h4>Color</h4>
                        <ul className='filters'>
                            {filterData.colors.map(obj => (
                                <li key={obj.name}>
                                    <label>
                                    <input type="checkbox" checked={color.has(obj.name)} onChange={() => handleFilters('color', obj.name)} />
                                    {obj.label}
                                    </label>
                             
                                </li>
                            ))}

                        </ul>
                    </div>


                    <div>
                        <h4>Gender</h4>
                        <ul className='filters'>
                            {filterData.genders.map(obj => (
                                <li key={obj.name}>
                                    <label>
                                    <input type="checkbox" checked={gender.has(obj.name)} onChange={() => handleFilters('gender', obj.name)} />
                                    {obj.label}
                                    </label>
                             
                                </li>
                            ))}

                        </ul>
                    </div>

                    
                    <div>
                        <h4>Price</h4>
                        <ul className='filters'>
                            {filterData.prices.map(obj => (
                                <li key={obj.name}>
                                    <label>
                                    <input type="checkbox" checked={price.has(obj.name)} onChange={() => handleFilters('price', obj.name)} />
                                    {obj.label}
                                    </label>
                             
                                </li>
                            ))}

                        </ul>
                    </div>

                    
                    <div>
                        <h4>Type</h4>
                        <ul className='filters'>
                            {filterData.types.map(obj => (
                                <li key={obj.name}>
                                    <label>
                                    <input type="checkbox" checked={type.has(obj.name)} onChange={() => handleFilters('type', obj.name)} />
                                    {obj.label}
                                    </label>
                             
                                </li>
                            ))}

                        </ul>
                    </div>

                </div>

                {showFilters ? (
                    <div className='mobile-menu-btns'>
                        {!areFiltersEmpty() ? (<button className='clear-filter-mobile-btn' onClick={() => {clearFilters(); setShowFilters(false);}} >
                        Clear Filters</button>): null}
                        <button className='close-filter-menu' onClick={() => setShowFilters(false)}>Close</button>
                    </div>
                ) : null}

            </div>
        </>
    )
}

export default FilterPanel;