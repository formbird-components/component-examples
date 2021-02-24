import React, { useEffect, useState } from 'react';
import { searchService } from '../services';

const WithGrid = (OriginalComponent) => {

    const NewComponent = (props) => {
        const { componentDefinition } = props;
        const [ columns, setColumns ] = useState(componentDefinition.gridColunns);
        const [ rows, setRows ] = useState([]);
        const [ loading, setLoading] = useState(false);

        useEffect(() => {
            setColumns(componentDefinition.gridColumns);
            
            const options = {
                filter: componentDefinition.filter,
                page: 0,
                size: 50
            };
    
            doFetch(options);
        }, [props]);

        const doFetch = (options) => {
            searchService.search(options).then(result => {
                setLoading(true);
        
                const data = result.data.hits.hits.map((esDoc, index) => ({ id: index, ...esDoc._source }));
                setRows(data);
        
            }).catch(err => console.log(err)).finally(() => {
                setLoading(false);
            });
        };

        return <OriginalComponent columns={columns} {...{rows, columns, loading, doFetch, ...props }}/>
    };

    return NewComponent;
};

export default WithGrid;