import getCurrentUser from "@/app/actions/getCurrectUser"
import prisma from "@/app/libs/prismadb"
import { NextResponse } from "next/server"

type Props = {
    listingId?: string
}

export async function DELETE(
    request: Request,
    { params }: { params: Props }
) {
    const currentUser = await getCurrentUser()
    if (!currentUser) return NextResponse.error()

    const { listingId } = params
    if (!listingId || typeof listingId !== 'string') throw new Error('Ivalid ID')

    const listing = await prisma.listing.deleteMany({
        where: {
            id: listingId,
            userId: currentUser.id
        }
    })

    return NextResponse.json(listing)
}