export const getContacts = ({contacts}) => contacts;

export const getState = ({contacts}) => ({loading: contacts.loading, error: contacts.error});

export const getFilteredContacts = ({contacts, filter}) => {
    if (!filter) {
        return contacts.items;
    }

    const normalizedFilter = filter.toLowerCase();
    const result = contacts.items.filter(({name, number}) => {
        const normalizedName = name.toLowerCase();
        return (normalizedName.includes(normalizedFilter) || number.includes(normalizedFilter));
    });

    return result;
}