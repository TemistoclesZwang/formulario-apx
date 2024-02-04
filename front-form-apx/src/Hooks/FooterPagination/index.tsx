import React from 'react';
import { usePagination } from '../../context/pagination';

export function FooterPagination() {
  const { currentPage, totalPages } = usePagination();

  return (
    <footer>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <span>Página {currentPage} de {totalPages}</span>
      </div>
    </footer>
  );
}
