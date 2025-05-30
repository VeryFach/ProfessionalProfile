import { FC, ReactNode } from 'react';

const Card: FC<{ children: ReactNode }> = ({ children }) => (
    <div className="p-4 bg-white rounded-xl shadow-md">{children}</div>
);

export default Card;