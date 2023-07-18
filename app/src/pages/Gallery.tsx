import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography, Link, Button } from '@mui/material';

interface ArtPiece {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    price: string;
    contactEmail: string;
}

const artPiecesData: ArtPiece[] = [
    {
        id: 1,
        title: 'Art Piece 1',
        description: 'Dimensions: 16" x 20", Medium: Oil on Canvas, Year: 2022',
        imageUrl: 'url_to_image_1',
        price: '$300',
        contactEmail: 'sam.hernsa@gmail.com',
    },
    {
        id: 2,
        title: 'Art Piece 2',
        description: 'Dimensions: 24" x 36", Medium: Acrylic on Wood, Year: 2021',
        imageUrl: 'url_to_image_2',
        price: '$450',
        contactEmail: 'sam.hernsa@gmail.com',
    },
    // Add more art pieces as needed
    {
        id: 3,
        title: 'Art Piece 3',
        description: 'Dimensions: 18" x 24", Medium: Watercolor on Paper, Year: 2023',
        imageUrl: 'url_to_image_3',
        price: '$250',
        contactEmail: 'sam.hernsa@gmail.com',
    },
    {
        id: 4,
        title: 'Art Piece 4',
        description: 'Dimensions: 12" x 16", Medium: Pastels on Canvas, Year: 2022',
        imageUrl: 'url_to_image_4',
        price: '$200',
        contactEmail: 'sam.hernsa@gmail.com',
    },
    {
        id: 5,
        title: 'Art Piece 5',
        description: 'Dimensions: 30" x 40", Medium: Oil on Panel, Year: 2021',
        imageUrl: 'url_to_image_5',
        price: '$600',
        contactEmail: 'sam.hernsa@gmail.com',
    },
    {
        id: 6,
        title: 'Art Piece 6',
        description: 'Dimensions: 20" x 20", Medium: Mixed Media on Canvas, Year: 2023',
        imageUrl: 'url_to_image_6',
        price: '$350',
        contactEmail: 'sam.hernsa@gmail.com',
    },
    {
        id: 7,
        title: 'Art Piece 7',
        description: 'Dimensions: 16" x 24", Medium: Charcoal on Paper, Year: 2022',
        imageUrl: 'url_to_image_7',
        price: '$180',
        contactEmail: 'sam.hernsa@gmail.com',
    },
    {
        id: 8,
        title: 'Art Piece 8',
        description: 'Dimensions: 18" x 18", Medium: Acrylic on Canvas, Year: 2021',
        imageUrl: 'url_to_image_8',
        price: '$220',
        contactEmail: 'sam.hernsa@gmail.com',
    },
    {
        id: 9,
        title: 'Art Piece 9',
        description: 'Dimensions: 24" x 30", Medium: Oil Pastels on Paper, Year: 2023',
        imageUrl: 'url_to_image_9',
        price: '$320',
        contactEmail: 'sam.hernsa@gmail.com',
    },
    {
        id: 10,
        title: 'Art Piece 10',
        description: 'Dimensions: 36" x 48", Medium: Oil on Canvas, Year: 2022',
        imageUrl: 'url_to_image_10',
        price: '$800',
        contactEmail: 'sam.hernsa@gmail.com',
    },
    {
        id: 11,
        title: 'Art Piece 11',
        description: 'Dimensions: 20" x 30", Medium: Watercolor on Paper, Year: 2021',
        imageUrl: 'url_to_image_11',
        price: '$280',
        contactEmail: 'sam.hernsa@gmail.com',
    },
    {
        id: 12,
        title: 'Art Piece 12',
        description: 'Dimensions: 18" x 24", Medium: Ink on Canvas, Year: 2023',
        imageUrl: 'url_to_image_12',
        price: '$240',
        contactEmail: 'sam.hernsa@gmail.com',
    },
];


const ITEMS_PER_PAGE = 1;

function Gallery() {
    const [currentPage, setCurrentPage] = useState(0);

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(artPiecesData.length / ITEMS_PER_PAGE) - 1));
    };

    const handlePrevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 0));
    };

    const currentArtPieces = artPiecesData.slice(
        currentPage * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    );

    return (
        <div>
            {currentArtPieces.map((artPiece) => (
                <Card key={artPiece.id} sx={{ maxWidth: 800, margin: '32px auto', mt:'40px' }}>
                    <CardMedia component="img" image={artPiece.imageUrl} title={artPiece.title} height="300" alt={artPiece.title} />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {artPiece.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            {artPiece.description}
                        </Typography>
                        <Typography variant="body1" color="primary">
                            Price: {artPiece.price}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            If you're interested in purchasing this piece, email me at: {' '}
                            <Link href={`mailto:${artPiece.contactEmail}`} color="inherit">
                                {artPiece.contactEmail}
                            </Link>
                            .
                        </Typography>
                    </CardContent>
                </Card>
            ))}
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
                <Button variant="contained" color="primary" onClick={handlePrevPage} disabled={currentPage === 0}>
                    Previous
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNextPage}
                    disabled={currentPage === Math.ceil(artPiecesData.length / ITEMS_PER_PAGE) - 1}
                >
                    Next
                </Button>
            </div>
        </div>
    );
}

export default Gallery;