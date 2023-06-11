import { SafeListing, SafeUser } from '@/app/types'
import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import ListingCard from '../Listing/ListingCard'

type Props = {
    listings: SafeListing[]
    currentUser?: SafeUser | null
}

export default function FavoritesClient({ listings, currentUser }: Props) {

    return (
        <Container>
            <Heading
                title='Favorites'
                subtitle='List of places you have favorited!'
            />
            <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8'>
                {listings.map((listing) => (
                    <ListingCard
                        key={listing.id}
                        data={listing}
                        currentUser={currentUser}
                    />
                ))}
            </div>
        </Container>
    )
}