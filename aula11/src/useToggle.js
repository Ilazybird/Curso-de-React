import { useState } from 'react';

export const useToggle = (inicialization = false) => {
    const [state, setState] = useState(inicialization);

    const toggle = () => {
        setState((prev) => !prev)
    }

    return [state, toggle]
}
