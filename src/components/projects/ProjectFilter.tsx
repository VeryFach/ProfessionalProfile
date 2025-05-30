import { FC } from 'react';

interface Props {
    categories: string[];
    selected: string;
    onSelect: (category: string) => void;
}

const ProjectFilter: FC<Props> = ({ categories, selected, onSelect }) => (
    <div className="flex flex-wrap gap-2 mb-4">
        {categories.map((category) => (
            <button
                key={category}
                onClick={() => onSelect(category)}
                className={`px-4 py-2 rounded-full border text-sm ${selected === category ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
                    }`}
            >
                {category}
            </button>
        ))}
    </div>
);

export default ProjectFilter;