const FIRST_VISIT_STORAGE_ITEM = 'strehlowweb-first-visit';

const registerFirstVisit = () => localStorage.setItem(FIRST_VISIT_STORAGE_ITEM, true);

export const isFirstVisit = () => {
    const firstVisit = !localStorage.getItem(FIRST_VISIT_STORAGE_ITEM);
    if (firstVisit) registerFirstVisit();
    return firstVisit;
};
