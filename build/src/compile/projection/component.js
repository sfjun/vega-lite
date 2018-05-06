import * as tslib_1 from "tslib";
import { Split } from '../split';
var ProjectionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ProjectionComponent, _super);
    function ProjectionComponent(name, specifiedProjection, size, data) {
        var _this = _super.call(this, tslib_1.__assign({}, specifiedProjection), // all explicit properties of projection
        { name: name } // name as initial implicit property
        ) || this;
        _this.specifiedProjection = specifiedProjection;
        _this.size = size;
        _this.data = data;
        _this.merged = false;
        return _this;
    }
    return ProjectionComponent;
}(Split));
export { ProjectionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2NvbXBpbGUvcHJvamVjdGlvbi9jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFFL0I7SUFBeUMsK0NBQW1CO0lBRzFELDZCQUFZLElBQVksRUFBUyxtQkFBK0IsRUFBUyxJQUFtQixFQUFTLElBQThCO1FBQW5JLFlBQ0UsdUNBQ00sbUJBQW1CLEdBQUksd0NBQXdDO1FBQ25FLEVBQUMsSUFBSSxNQUFBLEVBQUMsQ0FBRSxvQ0FBb0M7U0FDN0MsU0FDRjtRQUxnQyx5QkFBbUIsR0FBbkIsbUJBQW1CLENBQVk7UUFBUyxVQUFJLEdBQUosSUFBSSxDQUFlO1FBQVMsVUFBSSxHQUFKLElBQUksQ0FBMEI7UUFGNUgsWUFBTSxHQUFHLEtBQUssQ0FBQzs7SUFPdEIsQ0FBQztJQUNILDBCQUFDO0FBQUQsQ0FBQyxBQVRELENBQXlDLEtBQUssR0FTN0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1Byb2plY3Rpb259IGZyb20gJy4uLy4uL3Byb2plY3Rpb24nO1xuaW1wb3J0IHtWZ1Byb2plY3Rpb24sIFZnU2lnbmFsUmVmfSBmcm9tICcuLi8uLi92ZWdhLnNjaGVtYSc7XG5pbXBvcnQge1NwbGl0fSBmcm9tICcuLi9zcGxpdCc7XG5cbmV4cG9ydCBjbGFzcyBQcm9qZWN0aW9uQ29tcG9uZW50IGV4dGVuZHMgU3BsaXQ8VmdQcm9qZWN0aW9uPiB7XG4gIHB1YmxpYyBtZXJnZWQgPSBmYWxzZTtcblxuICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcsIHB1YmxpYyBzcGVjaWZpZWRQcm9qZWN0aW9uOiBQcm9qZWN0aW9uLCBwdWJsaWMgc2l6ZTogVmdTaWduYWxSZWZbXSwgcHVibGljIGRhdGE6IChzdHJpbmcgfCBWZ1NpZ25hbFJlZilbXSkge1xuICAgIHN1cGVyKFxuICAgICAgey4uLnNwZWNpZmllZFByb2plY3Rpb259LCAgLy8gYWxsIGV4cGxpY2l0IHByb3BlcnRpZXMgb2YgcHJvamVjdGlvblxuICAgICAge25hbWV9ICAvLyBuYW1lIGFzIGluaXRpYWwgaW1wbGljaXQgcHJvcGVydHlcbiAgICApO1xuICB9XG59XG4iXX0=