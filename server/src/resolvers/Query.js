function items(parent, args, context) {
  if (!context.userId) {
    return [];
  }
  return context.prisma.item.findMany();
}
function feed(parent, args, context) {
  if (!context.userId) {
    return [];
  }
  return context.prisma.item.findMany({
    take: args.limit,
    skip: args.offset
    });
  
}

module.exports = {
  items,
  feed,
};
