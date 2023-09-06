import { useState } from 'react';
import * as C from './styles';
import { Item } from '../../types/Item';

type Props = {
    item: Item,
    changeStatus: (item: number, status: boolean) => void
}

export const ListItem = ({ item, changeStatus }: Props) => {
    const [isChecked, setIsChecked] = useState(item.done);

    const handleChangeStatus = (status: boolean) => {
        changeStatus(item.id, status);
        setIsChecked(status);
    };

    return(
        <C.Container $done={isChecked}>
            <input type="checkbox" checked={isChecked} onChange={e => handleChangeStatus(e.target.checked)} />
            <label>{ item.name }</label>
        </C.Container>
    );
}