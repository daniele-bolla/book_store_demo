import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WithPagination extends Vue {
  @Prop({ default: [] }) readonly items!: Array<object>;
  @Prop({ default: 4 }) readonly pageSize!: number;
  @Prop({ default: 1 }) readonly currentPage!: number;

  get totalItems() {
    return this.items.length;
  }
  get totalPages() {
    return Math.ceil(this.totalItems / this.pageSize);
  }
  get startIndex() {
    return (this.currentPage - 1) * this.pageSize;
  }
  get endIndex() {
    return Math.min(this.startIndex + this.pageSize, this.totalItems);
  }
  get currentItems() {
    return this.items.slice(this.startIndex, this.endIndex);
  }
  get links() {
    return [...Array(this.totalPages)].map((link, index) => index + 1);
  }
  render() {
    return this.$scopedSlots.default?.({
      currentItems: this.currentItems,
      links: this.links
    }) as unknown;
  }
}
