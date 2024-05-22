export const KARTYA: any = [

    {
        id: 1,
        description: "Profil adatok",
        iconUrl: 'https://cdn1.iconfinder.com/data/icons/basic-ui-set-v5-user-outline/64/Account_profile_user_avatar_small-512.png',
        longDescription: "Szerkeztheted saját profilod adatait.",
    },
    {
        id: 2,
        description: "Adatok",
        iconUrl: 'https://static.thenounproject.com/png/5085161-200.png',
        longDescription: "Láthatod a többi adatot",
    },

    {
        id: 3,
        description: 'Információ lekérdezés',
        longDescription: "Kérj le menő Trónok harca idézeteket!",
        iconUrl: 'https://i.pinimg.com/originals/3a/30/05/3a300544e29b8800454b32a67699d6db.png',
    },

    {
        id: 4,
        description: "Empty",
        iconUrl: 'https://cdn-icons-png.freepik.com/512/5115/5115830.png',
        longDescription: "Empty",
    }
];


export function findKartyaById(kartyaId:number) {
    return KARTYA.find(kartya => kartya.id === kartyaId);
}