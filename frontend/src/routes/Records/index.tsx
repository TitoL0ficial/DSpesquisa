import { useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { BASE_URL } from '../../utils/system';
import type { RecordResponse } from '../../models/records';
import { formatDate } from '../../utils/format-date';
import Pagination from '../../components/Pagination';
import { Link } from 'react-router-dom';

export default function Records () {

    const [recordsResponse, setRecordsResponse] = useState<RecordResponse>();
    const [activePage, setActivePage] = useState(0);

    useEffect(() => {
        axios.get(`${BASE_URL}/records?linesPerPage=12&page=${activePage}`)
            .then((response) => {
                setRecordsResponse(response.data)
            });
    }, [activePage]);

    function handlePageChange (page: number) {
        setActivePage(page);
    }

    return (
        <div className="page-container">
            <div className="filters-container records-actions">
                <Link to="/charts">
                    <button className="action-filters">
                        VER GRÁFICO
                    </button>
                </Link>
            </div>
            <table className="records-table" cellPadding="0" cellSpacing="0">
                <thead>
                    <tr>
                        <th>INSTANTE</th>
                        <th>NOME</th>
                        <th>IDADE</th>
                        <th>PLATAFORMA</th>
                        <th>GÊNERO</th>
                        <th>TÍTULO DO GAME</th>
                    </tr>   
                </thead>
                <tbody>

                    {
                        recordsResponse?.content.map(item => (
                            <tr key={item.id}>
                                <td>{formatDate(item.moment)}</td>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td className="text-secondary">{item.gamePlatform}</td>
                                <td>{item.genreName}</td>
                                <td className="text-primary">{item.gameTitle}</td>
                            </tr>
                        ))
                    }
                                                                                                                                       
                </tbody>
            </table>

            <Pagination 
                activePage={activePage}
                totalPages={recordsResponse?.totalPages}
                goToPage={handlePageChange}
            />
        </div>
    );
}