// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004040404040404040404040404040404050102040201010104010201010101040401020401030102040104020101010404030304030401010403040104040404040202020104010104030403020102040401010202040201030304040404040404040401010402010401020202010104040101020202020104040404010102040401010404040401040101010101010404010103030401010402010404040404040101030304010104030303030101040401020404040404040201040104010404010204020202010103020401040204040101040101040104040404010402040401010406010401010101040104020404040404040404040404040404040404`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. . . 2 . . . . 2 . . . . . . 2 
2 . . 2 . . . . 2 . 2 . . . . 2 
2 . . 2 . 2 . . 2 . 2 . 2 2 2 2 
2 . . . . 2 . . 2 . 2 . . . . 2 
2 . . . . 2 . . . . 2 2 2 2 2 2 
2 2 2 . . 2 . . 2 . . . . . . 2 
2 . . . . . . . 2 2 2 2 . . . 2 
2 . . 2 2 2 2 . 2 . . . . . . 2 
2 . . . . 2 . . 2 . . 2 2 2 2 2 
2 . . . . 2 . . 2 . . . . . . 2 
2 . . 2 2 2 2 2 2 . . 2 . 2 . 2 
2 . . 2 . . . . . . . 2 . 2 . 2 
2 . . 2 . . 2 . 2 2 2 2 . 2 . 2 
2 . . 2 . . 2 . . . . 2 . 2 . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tileGrass3,sprites.builtin.forestTiles0,sprites.dungeon.doorClosedEast,sprites.dungeon.doorClosedNorth], TileScale.Sixteen);
            case "level2":
            case "level2":return tiles.createTilemap(hex`1000100005050505050505050505050505050505050d0909090b0c090b09090b0909020505080101010b01010b0101010101070505080b0b0b0b01010b01010b010b070a05080b01010101010101010b010b070a05080b0b0b010b010101010b010b070505080b0101010b01010b0b0b010b070505080b0b0b010b010101010b010b070505080b010101010101010101010b070505080b01010b0b010b010b01010b070505080b0101010b010b010b010b0b070505080b0b01010b010b010b01010b070505080b0101010b0b0b010b01010b070505080b0b0b0b0b0b0b0b0b0b0b0b070505030606060606060606060606060405050505050505050505050a0505050505`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . 2 . . 2 . . 2 . . . 2 
2 . . . . 2 . . 2 . . . . . . 2 
2 . 2 2 2 2 . . 2 . . 2 . 2 . 2 
2 . 2 . . . . . . . . 2 . 2 . 2 
2 . 2 2 2 . 2 . . . . 2 . 2 . 2 
2 . 2 . . . 2 . . 2 2 2 . 2 . 2 
2 . 2 2 2 . 2 . . . . 2 . 2 . 2 
2 . 2 . . . . . . . . . . 2 . 2 
2 . 2 . . 2 2 . 2 . 2 . . 2 . 2 
2 . 2 . . . 2 . 2 . 2 . 2 2 . 2 
2 . 2 2 . . 2 . 2 . 2 . . 2 . 2 
2 . 2 . . . 2 2 2 . 2 . . 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath9,sprites.builtin.forestTiles1,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.builtin.forestTiles0,sprites.builtin.forestTiles4,sprites.dungeon.doorLockedSouth,sprites.dungeon.doorLockedEast], TileScale.Sixteen);
            case "level3":
            case "level3":return tiles.createTilemap(hex`1000100001010101010101010101010101010101010504070407070707070407070707010107070707070703070707070707070101040704040403070307070704040401010707070707030703070307070707010103030703030107020703070704070101070707070707070707030707070401010303030301070707010303070707010107070707040707070707070707070101070207070707070103070707070701010202020307070107070307070202010106040702070703070702070707070101070407020707030707020704070701010704070707070707070407070407010107070707040707070704070707040101010101010101010101010101020101`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . 2 . 2 . . . . . 2 . . . . 2 
2 . . . . . . 2 . . . . . . . 2 
2 2 . 2 2 2 2 . 2 . . . 2 2 2 2 
2 . . . . . 2 . 2 . 2 . . . . 2 
2 2 2 . 2 2 2 . 2 . 2 . . 2 . 2 
2 . . . . . . . . . 2 . . . 2 2 
2 2 2 2 2 2 . . . 2 2 2 . . . 2 
2 . . . . 2 . . . . . . . . . 2 
2 . 2 . . . . . 2 2 . . . . . 2 
2 2 2 2 2 . . 2 . . 2 . . 2 2 2 
2 . 2 . 2 . . 2 . . 2 . . . . 2 
2 . 2 . 2 . . 2 . . 2 . 2 . . 2 
2 . 2 . . . . . . . 2 . . 2 . 2 
2 . . . . 2 . . . . 2 . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.coral2,sprites.builtin.coral5,sprites.builtin.coral0,sprites.builtin.coral1,sprites.dungeon.chestClosed,sprites.dungeon.chestOpen,sprites.dungeon.darkGroundNorthWest1], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "级别1":
            case "级别1":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "级别2":
            case "级别2":return tiles.createTilemap(hex`1000100001050a050505050a050505050a0c0507030202020402020202020202020202040d02120202020402020202020202020b030f05050502040202050505050505040d020204020204020202020202020204031002040202040202010505020202040d100202020204020202020205050504030204020105050505020202020202040302040204020202020202020202020b030204020402050505050502020505040311110204020202020202040202020403020202040202040204020402020204030202040402020402040204020505040d02020402020204020402040202020b03020204020202040204020402020204060e090909090e090909090e09090908`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 2 
2 . . . 2 . . . . . . . . . . 2 
2 . 2 . . . 2 . . . . . . . . 2 
2 . 2 2 2 . 2 . . 2 2 2 2 2 2 2 
2 . . 2 . . 2 . . . . . . . . 2 
2 2 . 2 . . 2 . . 2 2 2 . . . 2 
2 2 . . . . 2 . . . . . 2 2 2 2 
2 . 2 . 2 2 2 2 2 . . . . . . 2 
2 . 2 . 2 . . . . . . . . . . 2 
2 . 2 . 2 . 2 2 2 2 2 . . 2 2 2 
2 2 2 . 2 . . . . . . 2 . . . 2 
2 . . . 2 . . 2 . 2 . 2 . . . 2 
2 . . 2 2 . . 2 . 2 . 2 . 2 2 2 
2 . . 2 . . . 2 . 2 . 2 . . . 2 
2 . . 2 . . . 2 . 2 . 2 . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.floorLight2,sprites.dungeon.purpleOuterWest1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth0,sprites.dungeon.purpleOuterNorth2,sprites.dungeon.purpleOuterEast2,sprites.dungeon.purpleSwitchUp,sprites.dungeon.purpleOuterWest2,sprites.dungeon.purpleOuterSouth2,sprites.dungeon.purpleSwitchDown,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast1], TileScale.Sixteen);
            case "level7":
            case "level7":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level10":
            case "level10":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level12":
            case "level12":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "level6":
            case "level6":return tiles.createTilemap(hex`1000100001070707070a07070707070a070a07020a0a0a0a090a09090a0a0a0a090a09060b090909090909090a090909090a0a06050909090a0909090a0a0a0a090909060a0a0a090a0a0a090a090909090a0a0a05090a090a0909090a090909090a090605090a090a0a0a090a090909090a090605090a090a0909090a090909090a0906050a0a090a0a0a0a0a09090a0a0a0a06050909090909090909090909090909060a0a0a0a0a0909090a0a0a0a0a0a0a0a050909090a090a0909090909090909060a0a0a090a090a090909090a0909090605090a090a090a090a09090a0909090c05090a090a090a090a09090a090909060408080808080a0a0a08080a0a0a0a03`, img`
. . . . . 2 . . . . . 2 . 2 . . 
2 2 2 2 . 2 . . 2 2 2 2 . 2 . . 
. . . . . . . . 2 . . . . 2 2 . 
. . . . 2 . . . 2 2 2 2 . . . . 
2 2 2 . 2 2 2 . 2 . . . . 2 2 2 
. . 2 . 2 . . . 2 . . . . 2 . . 
. . 2 . 2 2 2 . 2 . . . . 2 . . 
. . 2 . 2 . . . 2 . . . . 2 . . 
. 2 2 . 2 2 2 2 2 . . 2 2 2 2 . 
. . . . . . . . . . . . . . . . 
2 2 2 2 2 . . . 2 2 2 2 2 2 2 2 
. . . . 2 . 2 . . . . . . . . . 
2 2 2 . 2 . 2 . . . . 2 . . . . 
. . 2 . 2 . 2 . 2 . . 2 . . . . 
. . 2 . 2 . 2 . 2 . . 2 . . . . 
. . . . . . 2 2 2 . . 2 2 2 2 . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundCenter,sprites.dungeon.collectibleInsignia,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
            case "level8":
            case "level8":return tiles.createTilemap(hex`100010000209090909090909090a0909090909030601010101010101010a0a0a0a0a0a0806010a0a010a0101010101010a010108060a0a01010a01010a0a0a010a01010806010a0a0a0a010101010a010a010108060101010a0101010a010a01010101080c0101010a0101010a010a0a0a0a0a08060101010a0a0a0a0a01010101010108060a0a0a0a0101010a01010a0a0a0a0a06010101010101010a01010a0101010806010a0a0a0a0a0a0a01010a0a0a0a0806010101010a01010a010101010101080a0a0a01010a01010a010a0a0a0a0a0a06010a01010a01010a0101010101010806010a01010a01010a0a0a0a0a0a010b05070707070a07070707070707070704`, img`
. . . . . . . . . 2 . . . . . . 
. . . . . . . . . 2 2 2 2 2 2 . 
. . 2 2 . 2 . . . . . . 2 . . . 
. 2 2 . . 2 . . 2 2 2 . 2 . . . 
. . 2 2 2 2 . . . . 2 . 2 . . . 
. . . . 2 . . . 2 . 2 . . . . . 
. . . . 2 . . . 2 . 2 2 2 2 2 . 
. . . . 2 2 2 2 2 . . . . . . . 
. 2 2 2 2 . . . 2 . . 2 2 2 2 2 
. . . . . . . . 2 . . 2 . . . . 
. . 2 2 2 2 2 2 2 . . 2 2 2 2 . 
. . . . . 2 . . 2 . . . . . . . 
2 2 2 . . 2 . . 2 . 2 2 2 2 2 2 
. . 2 . . 2 . . 2 . . . . . . . 
. . 2 . . 2 . . 2 2 2 2 2 2 . . 
. . . . . 2 . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath9,sprites.castle.tilePath7,sprites.castle.tilePath4,sprites.castle.tilePath8,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.dungeon.floorLight0,sprites.dungeon.stairWest,sprites.dungeon.stairLadder], TileScale.Sixteen);
            case "level14":
            case "level14":return tiles.createTilemap(hex`1000100001020101010101010101010101010101010201010102010102020202010102010102010201020101020101020101020103010102020201010201010201010201010101020102020202010102020202010102020201010101010101010101020101010102020202020201020202010201010101010102010101010201010101010102020101020102010202020202020201010202010201020101010101010101010102010102010201010202020101010202020101020102010101010101020101010101020202020101020102010201010202020201010201010201020102010101020101010102020102010202020101010201010101010101020101010104`, img`
. 2 . . . . . . . . . . . . . . 
. 2 . . . 2 . . 2 2 2 2 . . 2 . 
. 2 . 2 . 2 . . 2 . . 2 . . 2 . 
. . . 2 2 2 . . 2 . . 2 . . 2 . 
. . . 2 . 2 2 2 2 . . 2 2 2 2 . 
. 2 2 2 . . . . . . . . . . 2 . 
. . . 2 2 2 2 2 2 . 2 2 2 . 2 . 
. . . . . 2 . . . . 2 . . . . . 
. 2 2 . . 2 . 2 . 2 2 2 2 2 2 2 
. . 2 2 . 2 . 2 . . . . . . . . 
. . 2 . . 2 . 2 . . 2 2 2 . . . 
2 2 2 . . 2 . 2 . . . . . . 2 . 
. . . . 2 2 2 2 . . 2 . 2 . 2 . 
. 2 2 2 2 . . 2 . . 2 . 2 . 2 . 
. . 2 . . . . 2 2 . 2 . 2 2 2 . 
. . 2 . . . . . . . 2 . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.builtin.brick,myTiles.tile6,myTiles.tile7], TileScale.Sixteen);
            case "级别3":
            case "级别3":return tiles.createTilemap(hex`1000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16], TileScale.Sixteen);
            case "级别4":
            case "级别4":return tiles.createTilemap(hex`100010000102010301010103040201020501020506090e0e0e0e0e0e0e0e0e0e0e0e0a06020c09101010101010101010100a0c02010c0f0910101010101010100a0f0c06050c0f0f12121212121212120f0f0c02060c0f0f12121212121212120f0f0c05050c0f0f12121212121212120f0f0c02060c0f0f12121212121212120f0f0c07020c0f0f12121212121212120f0f0c02070c0f0f12121212121212120f0f0c05050c0f0f12121212121212120f0f0c05030c0f0f13121212121212120f0f0c01050c0f0b1010101010101010110f0c07070c0b10101010101010101010110c08010b0d0d0d0d0d0d0d0d0d0d0d0d0d0805050404080502080502060502020506`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.crowd7,sprites.builtin.crowd2,sprites.builtin.crowd8,sprites.builtin.crowd6,sprites.builtin.crowd3,sprites.builtin.crowd4,sprites.builtin.crowd1,sprites.builtin.crowd0,sprites.vehicle.roadTurn1,sprites.vehicle.roadTurn2,sprites.vehicle.roadTurn3,sprites.vehicle.roadIntersection2,sprites.vehicle.roadIntersection3,sprites.vehicle.roadIntersection1,sprites.vehicle.roadVertical,sprites.vehicle.roadHorizontal,sprites.vehicle.roadTurn4,sprites.dungeon.hazardWater,sprites.dungeon.hazardLava0], TileScale.Sixteen);
            case "level4":
            case "level4":return tiles.createTilemap(hex`1000100007010e01010101010101010101010105080909090909090909080909040909040809090909090909090809090909090a080101090101010509080b0b090b0b040809090909090909090909090909090408090909090909090909090909090904080b0c0b0b0b0b0c0b030902020202040809090909090909090909090909090408090909040909090909090909040404080101090409010509090109090909040809090904090904090901090101010408090909040409040901010909090904080901010409090a090909090904090408090909040904040d0d0d0d0904090a0809090904090904090909090904090406020c020202020202020f0202020203`, img`
2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . 2 . . 2 . . 2 
2 . . . . . . . . 2 . . . . . 2 
2 2 2 . 2 2 2 2 . 2 2 2 . 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . 2 . . . . . . . . 2 2 2 
2 2 2 . 2 . 2 2 . . 2 . . . . 2 
2 . . . 2 . . 2 . . 2 . 2 2 2 2 
2 . . . 2 2 . 2 . 2 2 . . . . 2 
2 . 2 2 2 . . 2 . . . . . 2 . 2 
2 . . . 2 . 2 2 2 2 2 2 . 2 . 2 
2 . . . 2 . . 2 . . . . . 2 . 2 
2 2 2 2 2 2 2 2 2 2 . 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterWest1,sprites.dungeon.greenOuterEast1,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.floorDark2,sprites.dungeon.greenOuterSouth2,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterEast2,sprites.dungeon.greenOuterWest0,sprites.dungeon.greenSwitchUp,sprites.dungeon.greenSwitchDown], TileScale.Sixteen);
            case "level9":
            case "level9":return tiles.createTilemap(hex`100010000102020202020202020202020202020308090a09090909090909090909090b0708090a090a0a0a090a0a090a0a0a0a0708090a0a0a090a09090a090a090909070809090909090a090a0a0a0a0a0a090708090a0a0a0a0a090a0909090909090708090909090909090a090a090a0a0907080909090a0a0a0a0a090a090a0a090708090a0a0a09090a09090a090a0a0907080909090909090a09090a090a0a090708090a0a0a0a0a0a0a0a0a0a0a0a0a0708090a0a090909090a090a090909090708090909090909090a090a09090a0907080a0a0a0a0a0a0a0a090a0a0a0a0907080c090909090909090909090909090705060606060606060606060606060604`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 2 . 2 . . . 2 . . 2 . . . . 2 
2 2 . . . 2 . 2 2 . 2 . 2 2 2 2 
2 2 2 2 2 2 . 2 . . . . . . 2 2 
2 2 . . . . . 2 . 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 . 2 . 2 . . 2 2 
2 2 2 2 . . . . . 2 . 2 . . 2 2 
2 2 . . . 2 2 . 2 2 . 2 . . 2 2 
2 2 2 2 2 2 2 . 2 2 . 2 . . 2 2 
2 2 . . . . . . . . . . . . . 2 
2 2 . . 2 2 2 2 . 2 . 2 2 2 2 2 
2 2 2 2 2 2 2 2 . 2 . 2 2 . 2 2 
2 . . . . . . . . 2 . . . . 2 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.greenOuterNorthWest,sprites.dungeon.greenOuterNorth0,sprites.dungeon.greenOuterNorthEast,sprites.dungeon.greenOuterSouthWest,sprites.dungeon.greenOuterSouthEast,sprites.dungeon.greenOuterSouth0,sprites.dungeon.greenOuterEast0,sprites.dungeon.greenOuterWest1,sprites.dungeon.floorLight2,sprites.dungeon.darkGroundCenter,myTiles.tile3,myTiles.tile4], TileScale.Sixteen);
            case "level13":
            case "level13":return tiles.createTilemap(hex`1000100001020202020202020202020202020202010201010101010101010101010101020102010202020202020202020202010201020102010101010101010101020102010201020502020202020202010201020102010201020101010101020102010201020102010201020202010201020102010201020102010401020102010201020102010201020101010201020102010201020102010202020202010201020102010201020101010101010102010201020102010202020201020202020102010201020101010101010101010101020102010202020202020202020202020201020101010101010201010101010101010201010101010102030202020202020202`, img`
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 . . . . . . . . . . . . . 2 
. 2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 
. 2 . 2 . . . . . . . . . 2 . 2 
. 2 . 2 2 2 2 2 2 2 2 2 . 2 . 2 
. 2 . 2 . 2 . . . . . 2 . 2 . 2 
. 2 . 2 . 2 . 2 2 2 . 2 . 2 . 2 
. 2 . 2 . 2 . . . 2 . 2 . 2 . 2 
. 2 . 2 . 2 . . . 2 . 2 . 2 . 2 
. 2 . 2 . 2 2 2 2 2 . 2 . 2 . 2 
. 2 . 2 . . . . . . . 2 . 2 . 2 
. 2 . 2 2 2 2 . 2 2 2 2 . 2 . 2 
. 2 . . . . . . . . . . . 2 . 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 . 2 
. . . . . . 2 . . . . . . . . 2 
. . . . . . 2 . 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.floorDark2,sprites.dungeon.floorLight4,sprites.dungeon.stairLarge,myTiles.tile5,sprites.dungeon.floorDark0], TileScale.Sixteen);
            case "level11":
            case "level11":return tiles.createTilemap(hex`10001000020404040404040404040404040404030509090909090909090909090909090805090a0a0a0a0a0a0a0a0a0a0a0a090805090a0909090909090909090909090805090a090a0a0a0a0a0a0a0a090b090805090a090a0909090909090a090a090805090a0a0a090a0a0a0a0909090a0908050c0a090a0909090d0a0a09090a090805090a090a090a0a0a0a0a0a090a090805090a090a090a0a0a0a0a0a090a090805090a090a0909090909090a090a090805090a090a0a0a0a0a0a0a0a090a090805090a090909090909090909090a090805090a0a0a0a0a0a0a0a0a0a0a0a09080509090909090909090909090909090801070707070707070707070707070706`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 . 2 . . . . . . . . 2 . 2 2 
2 2 . 2 . 2 2 2 2 2 2 . 2 . 2 2 
2 2 . . . 2 . . . . 2 2 2 . 2 2 
2 . . 2 . 2 2 2 2 . . 2 2 . 2 2 
2 2 . 2 . 2 . . . . . . 2 . 2 2 
2 2 . 2 . 2 . . . . . . 2 . 2 2 
2 2 . 2 . 2 2 2 2 2 2 . 2 . 2 2 
2 2 . 2 . . . . . . . . 2 . 2 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 . 2 2 
2 2 . . . . . . . . . . . . 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.floorDark0,sprites.castle.tilePath5,sprites.builtin.field0,sprites.builtin.field1,sprites.dungeon.floorLight4], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile6":
            case "tile8":return tile8;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
