import { Table } from "@chakra-ui/react";


function SWAPITable({planets}: {planets: any[]}) {
    return (
        <>
            <Table.Root size="sm" striped>
                <Table.Header>
                    <Table.Row>
                        <Table.ColumnHeader>Planet</Table.ColumnHeader>
                        <Table.ColumnHeader>Diameter</Table.ColumnHeader>
                        <Table.ColumnHeader>Climate</Table.ColumnHeader>
                        <Table.ColumnHeader>Population</Table.ColumnHeader>
                        <Table.ColumnHeader textAlign="end">Terrain</Table.ColumnHeader>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {planets.map((planet) => (
                        <Table.Row key={Date.now() + Math.random()}>
                            <Table.Cell>{planet.name}</Table.Cell>
                            <Table.Cell>{planet.diameter}</Table.Cell>
                            <Table.Cell>{planet.climate}</Table.Cell>
                            <Table.Cell>{planet.population}</Table.Cell>
                            <Table.Cell textAlign="end">{planet.terrain}</Table.Cell>
                        </Table.Row>
                    ))}
                </Table.Body>
            </Table.Root>
        </>
    )
}

export default SWAPITable